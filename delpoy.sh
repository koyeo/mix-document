yarn build
if [ $? -eq 0 ]; then
  tcb hosting delete -e mix-8gfaab7jdc6a9ade --dir /
  tcb hosting deploy build -e mix-8gfaab7jdc6a9ade
fi
