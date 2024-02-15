def response(hey_bob):
    if hey_bob.isupper() and hey_bob.strip().endswith('?'): return "Calm down, I know what I'm doing!"
    if hey_bob.strip().endswith('?'): return "Sure."
    if hey_bob.isupper(): return "Whoa, chill out!"
    return "Fine. Be that way!" if (not hey_bob or hey_bob.isspace()) else "Whatever."
