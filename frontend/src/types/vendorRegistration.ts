export interface VendorRegistrationForm {
  // Account
  ownerName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;

  // Business
  businessName: string;
  category: string;
  city: string;
  address: string;
  description: string;

  // Gallery
  profileImage: string;
  coverImage: string;
  portfolioImages: string[];
}