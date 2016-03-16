# Bork Bork Bork
AWS Lamda function plus S3 static site to run text through a swedish chef lexer.

In public:
 -- aws s3 sync . s3://borkbork --acl public-read

 In lambda:
  -- zip lambda.zip index.js chef