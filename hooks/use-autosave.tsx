import { useEffect, useRef } from "react";

// Custom hook for auto-save/restore
export const useFormAutoSave = (
  formData: any,
  setFormData: (data: any) => void,
  key: string = "autoSavedForm"
) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Save form data with debouncing
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      sessionStorage.setItem(key, JSON.stringify(formData));
    }, 500); // Debounce by 500ms

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [formData, key]);

  // Restore form data on mount
  useEffect(() => {
    const savedData = sessionStorage.getItem(key);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.error("Failed to restore form data:", error);
      }
    }
  }, [setFormData, key]);

  // Save on beforeunload
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem(key, JSON.stringify(formData));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [formData, key]);

  // Clear saved data
  const clearSavedData = () => {
    sessionStorage.removeItem(key);
  };

  return { clearSavedData };
};
