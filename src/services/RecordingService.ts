const prefix = 'api/Recording';

const CreateRecording = `${prefix}/CreateRecording`;
const RecalculateRecording = (recordingId: string) => `${prefix}/RecalculateRecording?id=${recordingId}`;
const GetRecording = (recordingId: string) =>
  `${prefix}/GetRecording?id=${recordingId}`;

  const GetLatestRecordingFromDeviceID = (recordingId: string) =>
  `${prefix}/GetLatestRecordingFromDeviceID?deviceId=${recordingId}`;
  const GetRecordingsFromDeviceID = (recordingId: string) =>
  `${prefix}/GetRecordingsFromDeviceID?deviceId=${recordingId}`;


export { CreateRecording, RecalculateRecording, GetRecording, GetLatestRecordingFromDeviceID, GetRecordingsFromDeviceID };
