import { Portfolio } from "@/types/portfolio";

const STORAGE_KEY = "portfolio";

export function getPortfolio(): Portfolio[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

export function savePortfolio(
  portfolio: Portfolio[]
): void {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(portfolio)
  );
}

export function createPortfolio(
  item: Portfolio
): void {
  const portfolio = getPortfolio();

  portfolio.push(item);

  savePortfolio(portfolio);
}

export function getPortfolioById(
  id: string
): Portfolio | undefined {
  return getPortfolio().find(
    (item) => item.id === id
  );
}

export function getVendorPortfolio(
  vendorId: number
): Portfolio[] {
  return getPortfolio().filter(
    (item) =>
      item.vendorId === vendorId
  );
}

export function updatePortfolio(
  updatedItem: Portfolio
): void {
  const portfolio = getPortfolio();

  savePortfolio(
    portfolio.map((item) =>
      item.id === updatedItem.id
        ? updatedItem
        : item
    )
  );
}

export function deletePortfolio(
  id: string
): void {
  savePortfolio(
    getPortfolio().filter(
      (item) => item.id !== id
    )
  );
}