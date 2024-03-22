.PHONY: build-and-run
build-and-run: 
	docker build -t koa-server .
	docker run -d -p 3000:3000 \
	--mount type=bind,src=$(PWD)/logs,target=/koa-app/logs \
	koa-server


