-- Bools
jtrue :: p1 -> p2 -> p1
jtrue x y=x --returns first
jfalse :: p1 -> p2 -> p2
jfalse x y=y --returns second

-- Creating Operators
jnot x=x jfalse jtrue
jand x y=x (y jtrue jfalse) jfalse
jor x y=x jtrue (y jtrue jfalse)

-- Using prev functions:
jxor x y=jnot (jand x y) `jand` jor x y jtrue jfalse --not both, but at least one
-- Just lambda:
jxor2 x y=x (y jfalse jtrue) (y jtrue jfalse)


main=do
    putStrLn "Bools"
    print $ jtrue 1 0
    print $ jfalse 1 0

    putStrLn "Not"
    print $ jnot jtrue 1 0
    print $ jnot jfalse 1 0

    putStrLn "And"
    print $ jand jtrue jtrue 1 0
    print $ jand jfalse jtrue 1 0
    print $ jand jtrue jfalse 1 0
    print $ jand jfalse jfalse 1 0

    putStrLn "Or"
    print $ jor jtrue jtrue 1 0
    print $ jor jtrue jfalse 1 0
    print $ jor jfalse jtrue 1 0
    print $ jor jfalse jfalse 1 0

    putStrLn "Xor"
    print $ jxor jtrue jtrue 1 0
    print $ jxor jtrue jfalse 1 0
    print $ jxor jfalse jtrue 1 0
    print $ jxor jfalse jfalse 1 0

    putStrLn "Xor2"
    print $ jxor2 jtrue jtrue 1 0
    print $ jxor2 jtrue jfalse 1 0
    print $ jxor2 jfalse jtrue 1 0
    print $ jxor2 jfalse jfalse 1 0

