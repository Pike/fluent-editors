# Try editing the translations here!

-a-good-term = Vocabulary
    .gender = neutral

hello-world = Hello, world!

shared-photos =
    { $user_name } { $photo_count ->
        [0] hasn't added any photos yet
        [one] added a new photo
       *[other] added { $photo_count } new photos
    }.

liked-comment =
    { $user_name } liked your comment on { $user_gender ->
        [male] his
        [female] her
       *[other] their
    } post.

xul-button =
  .label = Press me
  .accesskey = P

terms-effective = Effective { DATETIME($date, month: "long", year: "numeric", day: "numeric") }

pretty-complex =
    This { $one_count ->
     [one] is simple
    *[other] is pretty { $second_count ->
     [one] trivial
    *[other] darn complex
    }
    }
