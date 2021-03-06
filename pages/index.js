import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Loader from '../components/Loader';

import toast from 'react-hot-toast';

export default function Home() {
  return (
    <div className={styles.container}>
      <Loader show />
      <button onClick={() => toast.success('Hello from Toaster!')}>
        Toast Me
      </button>
    </div>
  )
}
