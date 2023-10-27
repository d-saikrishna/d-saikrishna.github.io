# Why doctors need Bayes?
Say you are worried that you got a cancer because of some symptom. You call up your doctor and he says that there is a minute 1% chance of cancer with the said symptoms. In any case, since this is a Low Probability-High Impact event, he asks you to get it checked.

You got a test done, and sadly it is positive. Anyways, your doctor saw the test results and got worried for you. This test has an accuracy of 80%! Which means out of 100 cancer cases, it can rightly detect 80 as cancers. He recommended all the course of action — chemotherapy, surgery, radiation etc. 

But what is the probability that you really got cancer, based on the test result? Pause and do some math.

The answer is 7.5%! Yes, with the reported symptoms and the positive test result of 80% accuracy – you still have a 7.5% of having a cancer.

Let’s go back to the Bayes theorem now. 

<div style="text-align: center"><img src="bayes-doctor/bayes1.webp" width="70%"/></div>

Your doctor, like 95 others of a dated study, committed a mathematical fallacy – CONFUSION OF THE INVERSE. 

Probability (Cancer/Positive Test) != Probability (Positive Test/Cancer) 

This fallacy gives a breathing room for quacks. I recently had a twitter engagement with someone whose brother suffered overtreatment for cancer. Then the argument was that medical care for advanced cancers suck, and thus AYUSH is better (even if ineffective) because it is not invasive and won’t cause misery to the patient.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Allopaths are mostly money hungry monsters - learnt the hard way between January 2019 and January 2023 - My brother in law&#39;s cancer treatment - which left me broke as well</p>&mdash; Hairaan Pareshaan 🔗 🙋‍♂️ (@HairaanJivi) <a href="https://twitter.com/HairaanJivi/status/1637720664554471425?ref_src=twsrc%5Etfw">March 20, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Consider going through the thread for an interesting debate on alternative medicine

Taking the risk of a simplistic analysis, let me extend the above math problem to this case. It is more probable that our patient didn’t have cancer at all. His symptoms are probably because of a some other deadly disease or just a flu. But since our doctor diagnosed him with cancer, he had to undergo unnecessary misery of overtreatment. There is a good chance that just a placebo treatment would have sufficed. And placebo is a space where quacks survive. 

I’m not suggesting all doctors commit overtreatment just because they are bad at math. There are too many reasons behind overtreatment in commercial healthcare today. But we are also a society that chooses to become doctors because we are bad at high school math. There are many decisions that a doctor has to take about a patient and doctors also have many prior opinions (biases). The problem is not the bias, but it is about how do we update our opinions based on new evidence. Lack of a good updating mechanism will lead to undertreatment and overtreatment — both putting the patient at risk.
