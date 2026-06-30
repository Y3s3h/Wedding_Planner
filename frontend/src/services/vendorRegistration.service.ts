import { initialVendorRegistration } from "@/data/vendorRegistration";

class VendorRegistrationService {

  getInitialData() {
    return initialVendorRegistration;
  }

}

export const vendorRegistrationService =
  new VendorRegistrationService();