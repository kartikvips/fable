# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

pics=[
"https://randomuser.me/api/portraits/women/50.jpg",
"https://randomuser.me/api/portraits/men/11.jpg",
"https://randomuser.me/api/portraits/women/51.jpg",
"https://randomuser.me/api/portraits/men/46.jpg",
"https://randomuser.me/api/portraits/women/7.jpg",
"https://randomuser.me/api/portraits/women/60.jpg",
"https://randomuser.me/api/portraits/women/13.jpg",
"https://randomuser.me/api/portraits/men/73.jpg",
"https://randomuser.me/api/portraits/men/18.jpg",
"https://randomuser.me/api/portraits/women/27.jpg",
"https://randomuser.me/api/portraits/men/1.jpg",
"https://randomuser.me/api/portraits/women/46.jpg",
"https://randomuser.me/api/portraits/men/37.jpg",
"https://randomuser.me/api/portraits/men/47.jpg",
"https://randomuser.me/api/portraits/women/40.jpg",
"https://randomuser.me/api/portraits/men/51.jpg",
"https://randomuser.me/api/portraits/women/93.jpg",
"https://randomuser.me/api/portraits/women/20.jpg",
"https://randomuser.me/api/portraits/women/84.jpg",
"https://randomuser.me/api/portraits/women/61.jpg",
"https://randomuser.me/api/portraits/women/11.jpg",
"https://randomuser.me/api/portraits/women/12.jpg",
"https://randomuser.me/api/portraits/men/23.jpg",
"https://randomuser.me/api/portraits/women/87.jpg",
"https://randomuser.me/api/portraits/men/11.jpg",
"https://randomuser.me/api/portraits/women/41.jpg",
"https://randomuser.me/api/portraits/men/27.jpg",
"https://randomuser.me/api/portraits/men/4.jpg",
"https://randomuser.me/api/portraits/women/93.jpg",
"https://randomuser.me/api/portraits/men/97.jpg",
"https://randomuser.me/api/portraits/men/65.jpg",
"https://randomuser.me/api/portraits/women/47.jpg",
"https://randomuser.me/api/portraits/women/13.jpg",
"https://randomuser.me/api/portraits/men/80.jpg",
"https://randomuser.me/api/portraits/women/1.jpg",
"https://randomuser.me/api/portraits/women/67.jpg",
"https://randomuser.me/api/portraits/women/54.jpg",
"https://randomuser.me/api/portraits/women/33.jpg",
"https://randomuser.me/api/portraits/women/32.jpg",
"https://randomuser.me/api/portraits/men/54.jpg",
"https://randomuser.me/api/portraits/men/47.jpg",
"https://randomuser.me/api/portraits/men/29.jpg",
"https://randomuser.me/api/portraits/men/84.jpg",
"https://randomuser.me/api/portraits/women/31.jpg",
"https://randomuser.me/api/portraits/men/34.jpg",
"https://randomuser.me/api/portraits/men/9.jpg",
"https://randomuser.me/api/portraits/men/99.jpg",
"https://randomuser.me/api/portraits/women/41.jpg",
"https://randomuser.me/api/portraits/women/39.jpg",
"https://randomuser.me/api/portraits/women/12.jpg",
"https://randomuser.me/api/portraits/women/94.jpg",
"https://randomuser.me/api/portraits/women/49.jpg",
"https://randomuser.me/api/portraits/men/43.jpg",
"https://randomuser.me/api/portraits/men/80.jpg",
"https://randomuser.me/api/portraits/women/58.jpg",
"https://randomuser.me/api/portraits/women/34.jpg",
"https://randomuser.me/api/portraits/women/16.jpg",
"https://randomuser.me/api/portraits/women/14.jpg",
"https://randomuser.me/api/portraits/men/52.jpg",
"https://randomuser.me/api/portraits/men/55.jpg",
"https://randomuser.me/api/portraits/women/70.jpg",
"https://randomuser.me/api/portraits/women/53.jpg",
"https://randomuser.me/api/portraits/women/81.jpg",
"https://randomuser.me/api/portraits/women/91.jpg",
"https://randomuser.me/api/portraits/men/88.jpg",
"https://randomuser.me/api/portraits/women/34.jpg",
"https://randomuser.me/api/portraits/women/50.jpg",
"https://randomuser.me/api/portraits/women/42.jpg",
"https://randomuser.me/api/portraits/women/73.jpg",
"https://randomuser.me/api/portraits/women/39.jpg",
"https://randomuser.me/api/portraits/men/84.jpg",
"https://randomuser.me/api/portraits/men/75.jpg",
"https://randomuser.me/api/portraits/men/74.jpg",
"https://randomuser.me/api/portraits/men/82.jpg",
"https://randomuser.me/api/portraits/women/41.jpg",
"https://randomuser.me/api/portraits/women/93.jpg",
"https://randomuser.me/api/portraits/men/96.jpg",
"https://randomuser.me/api/portraits/women/33.jpg",
"https://randomuser.me/api/portraits/men/9.jpg",
"https://randomuser.me/api/portraits/men/13.jpg",
"https://randomuser.me/api/portraits/men/80.jpg",
"https://randomuser.me/api/portraits/women/45.jpg",
"https://randomuser.me/api/portraits/men/45.jpg",
"https://randomuser.me/api/portraits/women/6.jpg",
"https://randomuser.me/api/portraits/women/90.jpg",
"https://randomuser.me/api/portraits/women/20.jpg",
"https://randomuser.me/api/portraits/men/4.jpg",
"https://randomuser.me/api/portraits/women/19.jpg",
"https://randomuser.me/api/portraits/men/50.jpg",
"https://randomuser.me/api/portraits/men/82.jpg",
"https://randomuser.me/api/portraits/men/6.jpg",
"https://randomuser.me/api/portraits/women/86.jpg",
"https://randomuser.me/api/portraits/women/70.jpg",
"https://randomuser.me/api/portraits/women/57.jpg",
"https://randomuser.me/api/portraits/men/23.jpg",
"https://randomuser.me/api/portraits/women/18.jpg",
"https://randomuser.me/api/portraits/men/18.jpg",
"https://randomuser.me/api/portraits/men/24.jpg",
"https://randomuser.me/api/portraits/women/41.jpg",
"https://randomuser.me/api/portraits/men/48.jpg"]


user1 = User.create({firstname: "firstname", lastname: "lastname", email: "email", password: "password"})

# user2 = User.create({firstname: "Luke", lastname: "Skywalker", email: "sonofanakin@kotor.com", password: "starwarslegend"})

# user3 = User.create({firstname: "LeBron", lastname: "James", email: "betterthanmj@decisions.com", password: "23forlife"})

user4 = User.create({firstname: "Jack", lastname: "Parihar", email: "jack@gmail.com", password: "password"})

# user5 = User.create({firstname: "Captain", lastname: "America", email: "iruntheavengers@marvel.com", password: "ironmanisonlyamortal"})

100.times do |time|
    user = User.create({firstname: Faker::Name.first_name, lastname: Faker::Name.last_name, email: Faker::Internet.email, password: "password", img_url: pics.sample})

    user2 = User.create({firstname: Faker::Name.first_name, lastname: Faker::Name.last_name, email: Faker::Internet.email, password: "password", img_url: pics.sample})


    article = Article.create({title: Faker::StarWars.quote, body: "<h1>There are no limits in this world.</h1>
    <br/>
    <h2>
        Maybe there's a happy little bush that lives right there. Let's get wild today. The first step to doing anything is to believe you can do it. See it finished in your mind before you ever start.</h2>
<br/>
<p>This is gonna be a happy little seascape. We don't have to be concerned about it. We just have to let it fall where it will. But we're not there yet, so we don't need to worry about it. Put it in, leave it alone. We don't make mistakes we just have happy little accidents.</p>
<br/>
<blockquote>Don't fiddle with it all day. Clouds are free they come and go as they please. With practice comes confidence. It's beautiful - and we haven't even done anything to it yet.</blockquote>
</p><p>
<p>If you don't think every day is a good day - try missing a few. You'll see. Happy painting, God bless. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. A thin paint will stick to a thick paint. A tree cannot be straight if it has a crooked trunk.</p>
<br/>
<p>Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. Let your imagination be your guide. In nature, dead trees are just as normal as live trees. You can create anything that makes you happy. There isn't a rule. You just practice and find out which way works best for you.</p>
<br/>
<p>Let's do it again then, what the heck. Nature is so fantastic, enjoy it. Let it make you happy. Let's put some happy little bushes on the other side now. There's not a thing in the world wrong with washing your brush. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue.</p>
<br/>
<p>I want everbody to be happy. That's what it's all about. These little son of a guns hide in your brush and you just have to push them out. You have to make almighty decisions when you're the creator. That's a crooked tree. We'll send him to Washington. The only prerequisite is that it makes you happy. If it makes you happy then it's good.</p>
<br/>
<p>I think there's an artist hidden in the bottom of every single one of us. And right there you got an almighty cloud. It's important to me that you're happy. Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. See. We take the corner of the brush and let it play back-and-forth. Only think about one thing at a time. Don't get greedy. You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it.</p>
<br/>
<p>Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. And just raise cain. Decide where your cloud lives. Maybe he lives right in here. It's life. It's interesting. It's fun.</p>
<br/>
<p>I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush. Isn't that fantastic that you can create an almighty tree that fast? Don't kill all your dark areas - you need them to show the light. We'll take a little bit of Van Dyke Brown. You could sit here for weeks with your one hair brush trying to do that - or you could do it with one stroke with an almighty brush.</p>", user_id: user.id, publish_date: Time.now, hook: Faker::HowIMetYourMother.quote, img_url: "https://picsum.photos/1500/1000/?image=#{time+100}"})

comment = Comment.create(article_id: article.id, user_id: user.id, publish_date: Time.now, body: Faker::FamilyGuy.quote)

comment2 = Comment.create(article_id: article.id, user_id: user2.id, publish_date: Time.now, body: Faker::Witcher.quote)

end

# article1 = Article.create({title: "Revenge of the Mandalores", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

# Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

# Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

# Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

# Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

# When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

# But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user4.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1525463072426-4d65f1df37b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf5f94a3009bd34f1a8bbf3280bd35eb&auto=format&fit=crop&w=1267&q=80"})

# article2 = Article.create({title: "Revenge of the Wookies", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

# Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

# Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

# Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

# Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

# When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

# But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user3.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1517400777233-4562ed6ebc63?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=680ddec07b1a5caf97c4cfae7d6398c7&auto=format&fit=crop&w=1489&q=80"})

# article3 = Article.create({title: "Revenge of the Fallen", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

# Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

# Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

# Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

# Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

# When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

# But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user4.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1525312327132-8aefcec25ece?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=20481f36f8762b525f7c2cfe7352a505&auto=format&fit=crop&w=1350&q=80"})

# article4 = Article.create({title: "Revenge of the Binks", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

# Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

# Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

# Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

# Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

# When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

# But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user5.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1513704519535-f5c81aa78d0d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f60075252d3fd88dd65c486bb2f48602&auto=format&fit=crop&w=1350&q=80"})

# article5 = Article.create({title: "Revenge", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

# Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

# Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

# Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

# Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

# When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

# But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user1.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1526492412319-bff3b080353e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cc9c727c8543376a980312fa4dfa8af0&auto=format&fit=crop&w=1350&q=80"})

# article6 = Article.create({title: "Revenge of the DODODOs", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

# Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

# Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

# Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

# Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

# When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

# But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user4.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1472457974886-0ebcd59440cc?ixlib=rb-0.3.5&s=bb88d48217e833ea149c2984462431ec&auto=format&fit=crop&w=1498&q=80"})

# article7 = Article.create({title: "Revenge of the Ewoks", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

# Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

# Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

# Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

# Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

# When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

# But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user2.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1486736065690-45e0655d038a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8417003192c1520308b460e9ae6ab4c4&auto=format&fit=crop&w=1350&q=80"})

# article8 = Article.create({title: "Revenge of the Bored", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

# Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

# Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

# Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

# Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

# When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

# But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user5.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1518331539918-7a2dbf839306?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1280787fdf193abf01005221316a1ba8&auto=format&fit=crop&w=1349&q=80"})

# article9 = Article.create({title: "Revenge of the Lazy", body: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil. 

# Under the reign of Supreme Leader Kylo Ren, the First Order sets out to destroy the last of the Resistance. But while they are trying to find the one woman who can bring balance to the Force, the Force finds someone who doesn't want to be found. 

# Morgan Knight, fifteen, is a self-declared rebel with a dangerous, though hidden, past living on the Ring of Kafrene when a petty crime she attempts to commit pulls her into something much larger. 

# Enter Jay Russo, sixteen, one of the few soldiers left in the rebellion and a host to some of the galaxy's most important secrets. Secrets about the First Order. Secrets he has no intention of sharing.

# Then Commander Poe Dameron, the rebellious rebel, though the most loyal to his cause. The man that brought about some of the heaviest losses of the Resistance... And the man who will lead them back into victory. Or so he hopes.

# When the three are brought together in hopes of saving their cause, they fly right into a war none of them are prepared to fight. 

# But will they win? Will the First Order extinguish the spark? Or will their downfall come from something different..?", user_id: user3.id, publish_date: Time.now, hook: "The Resistance has been decimated. Our heroes have little hope. The galaxy is in turmoil.", img_url: "https://images.unsplash.com/photo-1518331717677-3d0374dcfcd5?ixlib=rb-0.3.5&s=5165b3c00259386fdbba5012648884be&auto=format&fit=crop&w=1349&q=80"})



