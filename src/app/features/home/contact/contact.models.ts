export interface ContactRequest {
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly area: string;
  readonly message: string;
  readonly consent: boolean;
}

export interface ContactSubmissionResult {
  readonly status: 'accepted';
}
