"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main>
      <h1 class="text-4xl font-bold mb-5">Shopping List App</h1>
      <div class="text-lg">
        {user ? (
          <>
            <p>Signed in as ({user.email}).</p>
            <p>
              <button class="text-lg hover:underline" onClick={firebaseSignOut}>
                Sign out
              </button>
            </p>
            <a class="text-lg hover:underline" href="/week-8/shopping-list">
              Continue to your Shopping List
            </a>
          </>
        ) : (
          <button onClick={gitHubSignIn}>Sign in with GitHub</button>
        )}
      </div>
    </main>
  );
}
