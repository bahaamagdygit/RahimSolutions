import { FilterSection } from './generic-filter';

// Demo data matching the Auto filter design
export const autoFilterSections: FilterSection[] = [
  {
    id: 'vehicle-type',
    title: 'Vehicle Type',
    type: 'tabs',
    expanded: true,
    options: [
      { id: 'all', label: 'All', selected: false },
      { id: 'used', label: 'Used', selected: false },
      { id: 'new', label: 'New', selected: true }
    ]
  },
  {
    id: 'brand-model',
    title: 'Brand And Model',
    type: 'searchable-checkbox',
    expanded: true,
    searchPlaceholder: 'Search for brand',
    options: [
      { id: 'opel', label: 'Opel', count: 0, selected: true },
      { id: 'vw', label: 'VW', count: 432, selected: false },
      { id: 'bmw', label: 'BMW', count: 432, selected: false },
      { id: 'mercedes', label: 'Mercedes-Benz', count: 432, selected: false },
      { id: 'hundai', label: 'Hundai', count: 432, selected: false },
      { id: 'honda', label: 'Honda', count: 432, selected: false },
      { id: 'fiat', label: 'Fiat', count: 432, selected: false },
      { id: 'lada', label: 'Lada', count: 432, selected: false },
      { id: 'mg', label: 'MG', count: 432, selected: false }
    ]
  },
  {
    id: 'transmission',
    title: 'Transmission',
    type: 'checkbox',
    expanded: true,
    options: [
      { id: 'manual', label: 'Manual', selected: false },
      { id: 'automatic', label: 'Automatic', selected: false },
      { id: 'dsg', label: 'DSG', selected: false }
    ]
  },
  {
    id: 'price',
    title: 'Price',
    type: 'range',
    expanded: true,
    fromPlaceholder: 'From',
    toPlaceholder: 'To',
    range: { from: null, to: null }
  },
  {
    id: 'engine-type',
    title: 'Engine Type',
    type: 'checkbox',
    expanded: true,
    options: [
      { id: 'petrol', label: 'Petrol', count: 1796, selected: false },
      { id: 'gas', label: 'Gas', count: 4223, selected: false },
      { id: 'hybrid', label: 'Hybird', count: 4223, selected: false },
      { id: 'diesel', label: 'Diesel', count: 4223, selected: false },
      { id: 'electro', label: 'Electro', count: 4223, selected: false }
    ]
  },
  {
    id: 'power',
    title: 'Power',
    type: 'range',
    expanded: true,
    fromPlaceholder: 'From',
    toPlaceholder: 'To',
    range: { from: null, to: null }
  },
  {
    id: 'year',
    title: 'Year Of Release',
    type: 'range',
    expanded: true,
    fromPlaceholder: 'From',
    toPlaceholder: 'To',
    range: { from: null, to: null }
  }
];

// Real Estate filter example
export const realEstateFilterSections: FilterSection[] = [
  {
    id: 'property-type',
    title: 'Property Type',
    type: 'tabs',
    options: [
      { id: 'all', label: 'All', selected: true },
      { id: 'rent', label: 'Rent', selected: false },
      { id: 'sale', label: 'Sale', selected: false }
    ]
  },
  {
    id: 'category',
    title: 'Category',
    type: 'checkbox',
    expanded: true,
    options: [
      { id: 'apartment', label: 'Apartment', count: 1250, selected: false },
      { id: 'villa', label: 'Villa', count: 340, selected: false },
      { id: 'office', label: 'Office', count: 180, selected: false },
      { id: 'land', label: 'Land', count: 95, selected: false }
    ]
  },
  {
    id: 'bedrooms',
    title: 'Bedrooms',
    type: 'checkbox',
    expanded: true,
    options: [
      { id: '1', label: '1 Bedroom', count: 520, selected: false },
      { id: '2', label: '2 Bedrooms', count: 890, selected: false },
      { id: '3', label: '3 Bedrooms', count: 650, selected: false },
      { id: '4+', label: '4+ Bedrooms', count: 230, selected: false }
    ]
  },
  {
    id: 'price',
    title: 'Price',
    type: 'range',
    fromPlaceholder: 'Min Price',
    toPlaceholder: 'Max Price',
    range: { from: null, to: null }
  },
  {
    id: 'area',
    title: 'Area (sqm)',
    type: 'range',
    fromPlaceholder: 'From',
    toPlaceholder: 'To',
    range: { from: null, to: null }
  }
];

// Electronics filter example
export const electronicsFilterSections: FilterSection[] = [
  {
    id: 'condition',
    title: 'Condition',
    type: 'tabs',
    options: [
      { id: 'all', label: 'All', selected: true },
      { id: 'new', label: 'New', selected: false },
      { id: 'used', label: 'Used', selected: false }
    ]
  },
  {
    id: 'brand',
    title: 'Brand',
    type: 'searchable-checkbox',
    searchPlaceholder: 'Search brand',
    options: [
      { id: 'apple', label: 'Apple', count: 1520, selected: false },
      { id: 'samsung', label: 'Samsung', count: 2340, selected: false },
      { id: 'sony', label: 'Sony', count: 890, selected: false },
      { id: 'lg', label: 'LG', count: 670, selected: false },
      { id: 'xiaomi', label: 'Xiaomi', count: 1100, selected: false }
    ]
  },
  {
    id: 'price',
    title: 'Price',
    type: 'range',
    fromPlaceholder: 'From',
    toPlaceholder: 'To',
    range: { from: null, to: null }
  }
];
