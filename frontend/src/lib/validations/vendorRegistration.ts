import { VendorRegistrationForm } from "@/types/vendorRegistration";

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateAccountStep(
  data: VendorRegistrationForm
): ValidationResult {

  const errors: Record<string, string> = {};

  if (!data.ownerName.trim()) {
    errors.ownerName = "Owner name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    errors.email = "Invalid email address.";
  }

  if (!/^\d{10}$/.test(data.phone)) {
    errors.phone = "Phone number must contain 10 digits.";
  }

  if (data.password.length < 8) {
    errors.password =
      "Password must be at least 8 characters.";
  }

  if (
    data.password !== data.confirmPassword
  ) {
    errors.confirmPassword =
      "Passwords do not match.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}


export function validateBusinessStep(
  data: VendorRegistrationForm
): ValidationResult {

  const errors: Record<string, string> = {};

  if (!data.businessName.trim()) {
    errors.businessName = "Business name is required.";
  }

  if (!data.category.trim()) {
    errors.category = "Category is required.";
  }

  if (!data.city.trim()) {
    errors.city = "City is required.";
  }

  if (!data.address.trim()) {
    errors.address = "Address is required.";
  }

  if (!data.description.trim()) {
    errors.description = "Description is required.";
  } else if (data.description.trim().length < 30) {
    errors.description =
      "Description must be at least 30 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}


export function validateGalleryStep(
  data: VendorRegistrationForm
): ValidationResult {

  const errors: Record<string, string> = {};

  if (!data.profileImage) {
    errors.profileImage =
      "Profile image is required.";
  }

  if (!data.coverImage) {
    errors.coverImage =
      "Cover image is required.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}