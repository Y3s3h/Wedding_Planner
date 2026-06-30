import { Service } from "@/types/service";

const STORAGE_KEY = "services";

export function getServices(): Service[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

export function saveServices(
  services: Service[]
): void {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(services)
  );
}

export function createService(
  service: Service
): void {
  const services = getServices();

  services.push(service);

  saveServices(services);
}

export function getServiceById(
  id: string
): Service | undefined {
  return getServices().find(
    (service) => service.id === id
  );
}

export function getVendorServices(
  vendorId: number
): Service[] {
  return getServices().filter(
    (service) =>
      service.vendorId === vendorId
  );
}

export function updateService(
  updatedService: Service
): void {
  const services = getServices();

  const updated = services.map((service) =>
    service.id === updatedService.id
      ? updatedService
      : service
  );

  saveServices(updated);
}

export function deleteService(
  id: string
): void {
  const services = getServices();

  saveServices(
    services.filter(
      (service) => service.id !== id
    )
  );
}