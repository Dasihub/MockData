import { FC } from 'react'
import styles from './loader.module.less'

const Loader: FC = () => {
	return <div className={styles.spinner}></div>
}

export default Loader
