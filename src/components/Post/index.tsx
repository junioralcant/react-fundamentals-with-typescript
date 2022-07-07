import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChangeEvent, FormEvent, useState } from 'react';

import { Avatar } from '../Avatar';
import { Comment } from '../Comments/Index';

import styles from './Post.module.css';

interface Author {
  name: string;
  avatarUrl: string;
  role: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(['Post muito massa!']);
  const [newComment, setNewComment] = useState('');

  const publishedDateFormat = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDataRelativeToNow = formatDistanceToNow(
    publishedAt,
    {
      locale: ptBR,
      addSuffix: true,
    }
  );

  function handlerCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newComment]);

    setNewComment('');
  }

  function handlerNewCommentChange(
    event: ChangeEvent<HTMLTextAreaElement>
  ) {
    setNewComment(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newComment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormat}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDataRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === 'link') {
            return (
              <p key={item.content}>
                <a href="#">{item.content}</a>
              </p>
            );
          }
        })}

        {/* <p>
          <a href="#">#novoprojeto #nlw #rocketseat</a>{' '}
        </p> */}
      </div>

      <form
        onSubmit={handlerCreateNewComment}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
          name="comment"
          value={newComment}
          onChange={handlerNewCommentChange}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
