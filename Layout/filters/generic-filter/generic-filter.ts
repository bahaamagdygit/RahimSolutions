import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Re-export demo data for easy access
export { autoFilterSections, realEstateFilterSections, electronicsFilterSections } from './filter-demo-data';

// Filter option for checkboxes and tabs
export interface FilterOption {
  id: string;
  label: string;
  count?: number;
  selected?: boolean;
}

// Range filter values
export interface RangeValue {
  from: number | null;
  to: number | null;
}

// Filter section configuration
export interface FilterSection {
  id: string;
  title: string;
  type: 'tabs' | 'checkbox' | 'searchable-checkbox' | 'range';
  icon?: string;
  expanded?: boolean;
  options?: FilterOption[];
  range?: RangeValue;
  searchPlaceholder?: string;
  fromPlaceholder?: string;
  toPlaceholder?: string;
}

// Filter change event
export interface FilterChangeEvent {
  sectionId: string;
  type: 'tabs' | 'checkbox' | 'searchable-checkbox' | 'range';
  value: string | string[] | RangeValue;
}

@Component({
  selector: 'app-generic-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './generic-filter.html',
  styleUrl: './generic-filter.css',
})
export class GenericFilter {
  @Input() title: string = '';
  @Input() showBackArrow: boolean = true;
  @Input() sections: FilterSection[] = [];

  @Output() filterChange = new EventEmitter<FilterChangeEvent>();
  @Output() backClick = new EventEmitter<void>();

  // Track expanded sections
  expandedSections = signal<Set<string>>(new Set());

  // Track search queries for searchable sections
  searchQueries = signal<Map<string, string>>(new Map());

  ngOnInit() {
    // Initialize expanded sections based on input
    const expanded = new Set<string>();
    this.sections.forEach(section => {
      if (section.expanded !== false) {
        expanded.add(section.id);
      }
    });
    this.expandedSections.set(expanded);
  }

  toggleSection(sectionId: string) {
    this.expandedSections.update(set => {
      const newSet = new Set(set);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  }

  isSectionExpanded(sectionId: string): boolean {
    return this.expandedSections().has(sectionId);
  }

  // Get search query for a section
  getSearchQuery(sectionId: string): string {
    return this.searchQueries().get(sectionId) || '';
  }

  // Update search query
  updateSearchQuery(sectionId: string, query: string) {
    this.searchQueries.update(map => {
      const newMap = new Map(map);
      newMap.set(sectionId, query);
      return newMap;
    });
  }

  // Filter options based on search query
  getFilteredOptions(section: FilterSection): FilterOption[] {
    if (!section.options) return [];

    const query = this.getSearchQuery(section.id).toLowerCase();
    if (!query) return section.options;

    return section.options.filter(option =>
      option.label.toLowerCase().includes(query)
    );
  }

  // Handle tab selection
  onTabSelect(section: FilterSection, optionId: string) {
    if (!section.options) return;

    section.options.forEach(opt => opt.selected = opt.id === optionId);

    this.filterChange.emit({
      sectionId: section.id,
      type: 'tabs',
      value: optionId
    });
  }

  // Handle checkbox toggle
  onCheckboxToggle(section: FilterSection, option: FilterOption) {
    option.selected = !option.selected;

    const selectedIds = section.options
      ?.filter(opt => opt.selected)
      .map(opt => opt.id) || [];

    this.filterChange.emit({
      sectionId: section.id,
      type: section.type as 'checkbox' | 'searchable-checkbox',
      value: selectedIds
    });
  }

  // Handle range change
  onRangeChange(section: FilterSection, field: 'from' | 'to', value: string) {
    if (!section.range) {
      section.range = { from: null, to: null };
    }

    section.range[field] = value ? Number(value) : null;

    this.filterChange.emit({
      sectionId: section.id,
      type: 'range',
      value: { ...section.range }
    });
  }

  // Handle back button click
  onBackClick() {
    this.backClick.emit();
  }

  // Check if option is selected (for tabs)
  isTabSelected(section: FilterSection, optionId: string): boolean {
    const option = section.options?.find(opt => opt.id === optionId);
    return option?.selected || false;
  }
}
