# Use an official Python runtime as the base image
FROM python:3.10

# Set the environment to user in the container
ENV PYTHONFAULTHANDLER=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONHASHSEED=random \
    PIP_NO_CACHE_DIR=off \
    PIP_DEFAULT_TIMEOUT=100 \
    FLASK_APP=app \
    DATABASE_URI=postgresql://root:password@postgres_db:5432/consumer_db


# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install the project dependencies
RUN pip3 install -r requirements.txt

# Copy the project code into the container
ADD . ./

ENTRYPOINT ["sh", "entrypoint.sh"]