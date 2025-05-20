interface WaitlistFormData {
  firstName: string;
  lastName: string;
  email: string;
  agreedToTerms: boolean;
}

interface WaitlistResponse {
  success: boolean;
  message?: string;
  data?: Record<string, unknown>;
}

/**
 * Submits user data to the waitlist API
 * @param formData User data for waitlist registration
 * @returns Promise with the response data or error
 */
export async function submitToWaitlist(formData: WaitlistFormData): Promise<WaitlistResponse> {
  try {
    // Extract the fields needed for the API
    const { agreedToTerms, ...apiData } = formData;
    
    // Validate that user agreed to terms
    if (!agreedToTerms) {
      throw new Error('You must agree to the terms and conditions');
    }

    const response = await fetch('https://api.graviitalbeats.com/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `Request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Waitlist submission error:', error);
    throw error;
  }
} 