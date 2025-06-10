export interface Skip {
  id: number;
  size: number;
  price_before_vat: number;
  vat: number;
  hire_period_days: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  transport_cost: number | null;
  per_tonne_cost: number | null;
} 