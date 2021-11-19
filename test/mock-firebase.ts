import * as admin from 'firebase-admin';

export function mockFirebase(
  set: any = null,
  doc: any = null,
  collection: any = null,
) {
  admin.initializeApp();
  set = jest.fn();
  doc = jest.fn(() => ({ set }));
  collection = jest
    .spyOn(admin.firestore(), 'collection')
    .mockReturnValue({ doc } as unknown as any);
  return { set, doc, collection };
}
