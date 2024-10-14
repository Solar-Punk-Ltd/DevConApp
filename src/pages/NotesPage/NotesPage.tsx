import React, { useEffect, useState } from "react";
import { Wallet } from "ethers";
import { Link } from "react-router-dom";
import "./NotesPage.scss";
import NavigationFooter from "../../components/NavigationFooter/NavigationFooter";
import ActionButton from "../../components/ActionButton/ActionButton";
import PlusIcon from "../../components/icons/PlusIcon/PlusIcon";
import HomeBackground from "../../assets/welcome-glass-effect.png";
import NoteItem, { NoteItemProps } from "../../components/NoteItem/NoteItem";
import {
  ROUTES,
  SELF_NOTE_TOPIC,
  ADDRESS_HEX_LENGTH,
} from "../../utils/constants";
import { getFeedUpdate, getData } from "../../utils/bee";

const NotesPage: React.FC = () => {
  const [noteRawTopics, setNoteRawTopics] = useState<string[]>([]);
  const [notes, setNotes] = useState<NoteItemProps[]>([]);
  const [loading, setLoading] = useState(false);

  const privKey = localStorage.getItem("privKey");
  if (!privKey) {
    return (
      <div className="notes-page-error">
        No private key found
        <NavigationFooter />
      </div>
    );
  }

  const fetchNotes = async () => {
    setLoading(true);
    const wallet = new Wallet(privKey);
    for (let i = 0; i < noteRawTopics.length; i++) {
      const rawTopic = noteRawTopics[i];
      const dataRef = await getFeedUpdate(wallet.address, rawTopic);
      let note: NoteItemProps;
      try {
        note = JSON.parse(await getData(dataRef)) as NoteItemProps;
      } catch (error) {
        console.log(`error parsing note, ref ${dataRef}:\n ${error}`);
        continue;
      }
      const found = notes.find((n) => n.id === note.id);
      if (!found) {
        setNotes((notes) => [...notes, note]);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    const selfNoteTopicsStr = localStorage.getItem(SELF_NOTE_TOPIC);
    if (selfNoteTopicsStr) {
      const tmpTopics = selfNoteTopicsStr.split(",");
      setNoteRawTopics(
        tmpTopics.filter((t) => t.length === ADDRESS_HEX_LENGTH)
      );
    }
  }, []);

  useEffect(() => {
    fetchNotes();
  }, [noteRawTopics]);

  return (
    <div className="notes-page">
      <div className="notes-page__background">
        <img src={HomeBackground} alt="" width="100%" height="100%" />
      </div>
      <div className="notes-page__header">Notes</div>
      <Link to={`${ROUTES.NOTES}${ROUTES.NEW_NOTE}`}>
        <ActionButton>
          <PlusIcon />
          <span className="notes-page__button-text">New note</span>
        </ActionButton>
      </Link>
      {!loading ? (
        notes.map((note, ix) => {
          return (
            <NoteItem
              key={ix}
              id={note.id}
              text={note.text}
              date={note.date}
              time={note.time}
            />
          );
        })
      ) : (
        <div className="notes-page__no-note">Loading notes...</div>
      )}
      <NavigationFooter />
    </div>
  );
};

export default NotesPage;
