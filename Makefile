.PHONY: build
build: 
	docker build -t koa-server .

.PHONY: run
run:
	docker run -d -p 3000:3000 \
	--mount type=bind,src=$(PWD)/logs,target=/koa-app/logs \
	koa-server


