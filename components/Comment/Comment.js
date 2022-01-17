import styles from './Comment.module.scss'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faPaperclip, faAt } from '@fortawesome/free-solid-svg-icons'

const Comment = ({ onSubmit }) => {
  const [value, setValue] = useState({})

  return (
    <div className={styles.comment_styled}>
      <div>
        <div className={styles.options_comment}>
          <button>
            <FontAwesomeIcon icon={faImages} className={styles.icon} />
          </button>
          <button>
            <FontAwesomeIcon icon={faPaperclip} className={styles.icon} />
          </button>
          <button>
            <FontAwesomeIcon icon={faAt} className={styles.icon} />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()

            typeof onSubmit === 'function' && onSubmit(value)
            setValue({})
          }}
          className={styles.comment_input}
        >
          <input
            type='text'
            name='comment'
            id='comment'
            value={value.comment || ''}
            onChange={({ target }) => {
              setValue({ [target.name]: target.value })
            }}
            placeholder='Comment...'
          />
        </form>
      </div>
    </div>
  )
}

export default Comment
