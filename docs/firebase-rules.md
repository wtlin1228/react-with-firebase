# Firebase Rules

## Database

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
		match /posts/{postId} {
    	allow read;
      allow create: if request.auth.uid != null && request.resource.data.title != null;
      allow update: if request.auth.uid != null;
      allow delete: if request.auth.uid == resource.data.user.uid;
    }

    match /users/{userId} {
    	allow read;
      allow write: if request.auth.uid == userId;
    }
  }
}
```

## Storage

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /user-profiles/{userId}/{photoURL} {
      allow read;
      allow write: if request.auth.uid == userId;
    }
  }
}
```
