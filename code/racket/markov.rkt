#lang racket

(define (markov)
  (define (recur (acc state terminate?)
            (define next-state (get-next state))
            (define next-word (sample (selection-for next-state)))
            (if (terminate? acc state)
                acc
                (recur (cons acc next-word) next-state))))
  (recur '() '("the" "first") (λ (acc state) (> (length acc) 10))))