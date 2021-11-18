import * as admin from 'firebase-admin';

export function mockFirebase(): any {
  admin.initializeApp({});
  const set = jest.fn();
  const doc = jest.fn(() => ({ set }));
  return jest
    .spyOn(admin.firestore(), 'collection')
    .mockReturnValue({ doc } as unknown as any);
}
