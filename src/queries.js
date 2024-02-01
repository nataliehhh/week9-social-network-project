`SELECT * FROM profiles 
JOIN theme ON profiles.theme_id = theme.id`

`SELECT posts.id, posts.post, posts.profile_id, profiles.user_name
FROM posts
JOIN profiles ON posts.profile_id = profiles.id
WHERE posts.profile_id = `