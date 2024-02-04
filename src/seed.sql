CREATE TABLE IF NOT EXISTS profiles (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    clerk_user_id TEXT NOT NULL,
    email TEXT,
    age INTEGER,
    location VARCHAR(250),
    zodiac VARCHAR(50),
    quote VARCHAR(250),
    mood VARCHAR(250),
    image TEXT,
    theme_id INTEGER REFERENCES theme(id)
)

CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    message VARCHAR(250) NOT NULL,
    to_profile_id INTEGER REFERENCES profiles(id) NOT NULL,
    from_profile_id INTEGER REFERENCES profiles(id) NOT NULL
)

CREATE TABLE IF NOT EXISTS messages_reply (
    id SERIAL PRIMARY KEY,
    reply VARCHAR(250) NOT NULL,
    profile_id INTEGER REFERENCES profiles(id) NOT NULL,
    message_id INTEGER REFERENCES messages(id) NOT NULL
)

CREATE TABLE IF NOT EXISTS messages_likes (
    profile_id INTEGER REFERENCES profiles(id) NOT NULL,
    message_id INTEGER REFERENCES messages(id) NOT NULL
)

CREATE TABLE IF NOT EXISTS reply_likes (
    profile_id INTEGER REFERENCES profiles(id) NOT NULL,
    messages_reply_id INTEGER REFERENCES messages_reply(id) NOT NULL
)

CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    post VARCHAR(500) NOT NULL,
    profile_id INTEGER REFERENCES profiles(id) NOT NULL
)

CREATE TABLE IF NOT EXISTS posts_comments (
    id SERIAL PRIMARY KEY,
    comment VARCHAR(250) NOT NULL,
    profile_id INTEGER REFERENCES profiles(id) NOT NULL,
    posts_id INTEGER REFERENCES posts(id) NOT NULL
)

CREATE TABLE IF NOT EXISTS posts_likes (
    profile_id INTEGER REFERENCES profiles(id) NOT NULL,
    posts_id INTEGER REFERENCES posts(id) NOT NULL
)

CREATE TABLE IF NOT EXISTS comments_likes (
    profile_id INTEGER REFERENCES profiles(id) NOT NULL,
    posts_comments_id INTEGER REFERENCES posts_comments(id) NOT NULL
)

CREATE TABLE IF NOT EXISTS interests (
    id SERIAL PRIMARY KEY,
    interests VARCHAR (50) NOT NULL
)

CREATE TABLE IF NOT EXISTS inspo (
    id SERIAL PRIMARY KEY,
    inspo VARCHAR (50) NOT NULL
)

CREATE TABLE IF NOT EXISTS profile_interests (
    profile_id INTEGER REFERENCES profiles(id) NOT NULL,
    interests_id INTEGER REFERENCES interests(id) NOT NULL
)

CREATE TABLE IF NOT EXISTS profile_inspo (
    profile_id INTEGER REFERENCES profiles(id) NOT NULL,
    inspo_id INTEGER REFERENCES inspo(id) NOT NULL
)

CREATE TABLE IF NOT EXISTS theme (
    id SERIAL PRIMARY KEY,
    theme VARCHAR (50) NOT NULL
)

INSERT INTO theme (theme) 
VALUES 
('So Basic'),
('Y2K'),
('Babez'),
('RAWR XD');

CREATE TABLE IF NOT EXISTS follows (
    follower_id INTEGER REFERENCES profiles(id) NOT NULL,
    followee_id INTEGER REFERENCES profiles(id) NOT NULL
)
