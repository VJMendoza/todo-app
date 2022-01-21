import { DueStatusPipe } from './due-status.pipe';

describe('DueStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new DueStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
