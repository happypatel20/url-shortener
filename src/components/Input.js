import React, { useState } from 'react'
import {db} from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import {CopyToClipboard} from 'react-copy-to-clipboard';
const tinyid = require('tiny-unique-id')

export const Input = () => {
  const [input, setInput] = useState("")
  const [shortenUrl, setShortenUrl] = useState("")
  const [copy, setCopy] = useState(false)

  const handleDb = async (e) => {
    const slug = tinyid.unique()
    try {
      await addDoc(collection(db, "urls"), {
        url: input,
        slug: slug
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setShortenUrl(`${window.location.origin}/${slug}`)
  }
  return (
    <>
      <h1>URL Shortener</h1>
      <input value={input} onInput={(e) => setInput(e.target.value)}/>
      <button onClick={handleDb}>Shorten</button>
      {shortenUrl &&
      <div className='wrap'>
        <span className={copy ? 'copied' : ''}>{shortenUrl}</span>
        <CopyToClipboard text={shortenUrl} onCopy={() => setCopy(true)}>
          <button>{copy ? 'Copied!' : "Copy"}</button>
        </CopyToClipboard>
      </div>}
    </>
  )
}

export default Input

// const handleDb = async () => {
//   const slug = tinyid.unique()
//     await db.collection('urls').add(
//       {
//         url: input,
//         slug: slug
//       }
//     )
//   }
