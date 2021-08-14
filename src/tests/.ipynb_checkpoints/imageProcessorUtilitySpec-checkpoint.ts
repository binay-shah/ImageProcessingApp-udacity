import {
  resizeImage,
  checkImageExists
} from '../utilities/imageProcessorUtility';
import { promises as fsPromises } from 'fs';

describe('', () => {
  afterEach(async function() {
    await fsPromises.unlink('images/thumb/fjord.jpg');
  });

  it('expects resizeImage function to be resolved', async () => {
    await resizeImage('fjord', '200', '200');
    const fileExists = await checkImageExists(`images/thumb/fjord.jpg`);
    expect(fileExists).toEqual(true);
  });
});

it('expects resizeImage function to be rejected with error', async () => {
  try {
    await resizeImage('xxx', '200', '200');
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
  }
});
