export default class AudioNotesAdapter {
  constructor(audioNotes) {
    this._audioNotes = audioNotes;
  }

  adapt() {
    return this._audioNotes.map((note) => {
      const transcription = note.transcription;
      return {
        id: note.id,
        name: note.name,
        creationDate: note.creation_date,
        publicUrl: note.public_url,
        hasFinished: transcription.finished,
        hasStarted: transcription.started,
        transcription: transcription.text,
      };
    });
  }
}
