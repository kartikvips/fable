# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create({firstname: "firstname", lastname: "lastname", email: "email", password: "password"})

user2 = User.create({firstname: "Luke", lastname: "Skywalker", email: "sonofanakin@kotor.com", password: "starwarslegend"})

user3 = User.create({firstname: "LeBron", lastname: "James", email: "betterthanmj@decisions.com", password: "23forlife"})

user4 = User.create({firstname: "Ryan", lastname: "Alejandro", email: "lordbnb@kindgood.com", password: "warriorssuck"})

user5 = User.create({firstname: "Captain", lastname: "America", email: "iruntheavengers@marvel.com", password: "ironmanisonlyamortal"})

article1 = Article.create({title: "Revenge of the Mandalores", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user2.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1525463072426-4d65f1df37b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf5f94a3009bd34f1a8bbf3280bd35eb&auto=format&fit=crop&w=1267&q=80"})

article2 = Article.create({title: "Revenge of the Wookies", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user3.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1517400777233-4562ed6ebc63?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=680ddec07b1a5caf97c4cfae7d6398c7&auto=format&fit=crop&w=1489&q=80"})

article3 = Article.create({title: "Revenge of the Fallen", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user4.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1525312327132-8aefcec25ece?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=20481f36f8762b525f7c2cfe7352a505&auto=format&fit=crop&w=1350&q=80"})

article4 = Article.create({title: "Revenge of the Binks", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user5.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1513704519535-f5c81aa78d0d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f60075252d3fd88dd65c486bb2f48602&auto=format&fit=crop&w=1350&q=80"})

article5 = Article.create({title: "Revenge", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user1.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1526492412319-bff3b080353e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cc9c727c8543376a980312fa4dfa8af0&auto=format&fit=crop&w=1350&q=80"})

article6 = Article.create({title: "Revenge of the DODODOs", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user4.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1472457974886-0ebcd59440cc?ixlib=rb-0.3.5&s=bb88d48217e833ea149c2984462431ec&auto=format&fit=crop&w=1498&q=80"})

article7 = Article.create({title: "Revenge of the Ewoks", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user2.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1472457974886-0ebcd59440cc?ixlib=rb-0.3.5&s=bb88d48217e833ea149c2984462431ec&auto=format&fit=crop&w=1498&q=80"})

article8 = Article.create({title: "Revenge of the Bored", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user5.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1472457974886-0ebcd59440cc?ixlib=rb-0.3.5&s=bb88d48217e833ea149c2984462431ec&auto=format&fit=crop&w=1498&q=80"})

article9 = Article.create({title: "Revenge of the Lazy", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user3.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1472457974886-0ebcd59440cc?ixlib=rb-0.3.5&s=bb88d48217e833ea149c2984462431ec&auto=format&fit=crop&w=1498&q=80"})

comment1 = Comment.create(article_id: 1, user_id: 1, publish_date: Time.now, body: "Commentttttt")

comment2 = Comment.create(article_id: 1, user_id: 2, publish_date: Time.now, body: "Commentttttt22")

comment3 = Comment.create(article_id: 1, user_id: 3, publish_date: Time.now, body: "Commentttttt33")

comment4 = Comment.create(article_id: 1, user_id: 4, publish_date: Time.now, body: "Commentttttt44")

comment5 = Comment.create(article_id: 1, user_id: 5, publish_date: Time.now, body: "Commentttttt55")

comment6 = Comment.create(article_id: 2, user_id: 1, publish_date: Time.now, body: "Commentttttt")

comment7 = Comment.create(article_id: 2, user_id: 2, publish_date: Time.now, body: "Commentttttt22")

comment8 = Comment.create(article_id: 2, user_id: 3, publish_date: Time.now, body: "Commentttttt33")

comment9 = Comment.create(article_id: 2, user_id: 4, publish_date: Time.now, body: "Commentttttt44")

comment10 = Comment.create(article_id: 2, user_id: 5, publish_date: Time.now, body: "Commentttttt55")