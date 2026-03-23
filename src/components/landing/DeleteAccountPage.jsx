import { useMemo, useState } from 'react';

const reasonOptions = [
  'I no longer use NotifyBear',
  'I am getting too many notifications',
  'I found a better alternative',
  'I have privacy concerns',
  'Other',
];

function DeleteAccountPage({ onBack }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [otherReason, setOtherReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const reasonMessages = useMemo(() => {
    const baseReasons = selectedReasons.filter((reason) => reason !== 'Other');

    if (selectedReasons.includes('Other') && otherReason.trim()) {
      return [...baseReasons, `Other: ${otherReason.trim()}`];
    }

    return baseReasons;
  }, [otherReason, selectedReasons]);

  const toggleReason = (reason) => {
    setSelectedReasons((current) =>
      current.includes(reason)
        ? current.filter((item) => item !== reason)
        : [...current, reason]
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!username.trim() || !password) {
      setError('Please provide both username and password.');
      return;
    }

    if (reasonMessages.length === 0) {
      setError('Please select at least one reason for deleting your account.');
      return;
    }

    const confirmed = window.confirm(
      'Are you sure you want to submit your account deletion request? You will receive an email confirmation before deletion is finalized.'
    );

    if (!confirmed) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        username: username.trim(),
        password,
        messages: reasonMessages,
      };

      const response = await fetch('https://notifybear.pythonanywhere.com/accounts/delete-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 200) {
        setSuccessMessage('Your account has been posted for deletion. You will receive an email confirmation.');
        setUsername('');
        setPassword('');
        setSelectedReasons([]);
        setOtherReason('');
      } else {
        setError('We could not submit your request right now. Please try again.');
      }
    } catch (requestError) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-2xl mx-auto px-6 py-16">
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← Back
        </button>

        <h1 className="mt-6 text-3xl font-bold text-gray-900">Delete Account</h1>
        <p className="mt-2 text-gray-600">
          Confirm your credentials and tell us why you want to delete your account.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username"
              autoComplete="username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>

          <fieldset>
            <legend className="text-sm font-medium text-gray-700">Why do you want to delete your account?</legend>
            <div className="mt-3 space-y-3">
              {reasonOptions.map((reason) => (
                <label key={reason} className="flex items-center gap-3 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={selectedReasons.includes(reason)}
                    onChange={() => toggleReason(reason)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>{reason}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {selectedReasons.includes('Other') && (
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="otherReason">
                Please describe your reason
              </label>
              <textarea
                id="otherReason"
                rows={4}
                value={otherReason}
                onChange={(event) => setOtherReason(event.target.value)}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Add details here"
              />
            </div>
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}
          {successMessage && <p className="text-sm text-green-700">{successMessage}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-white font-medium hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Delete Request'}
          </button>
        </form>
      </main>
    </div>
  );
}

export default DeleteAccountPage;