
# Stage 1 - Builder
FROM openjdk:11-jdk AS builder

WORKDIR /app
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

RUN chmod +x ./mvnw
# download the dependency if needed or if the pom file is changed
RUN ./mvnw dependency:go-offline -B

COPY src src

RUN ./mvnw package

# Stage 2 - Runtime
FROM openjdk:11-jdk

RUN mkdir -p /app/pixelflow

COPY --from=builder /app/target/*.jar /app/pixelflow.jar

ENTRYPOINT ["java", "-jar", "/app/pixelflow.jar"]
