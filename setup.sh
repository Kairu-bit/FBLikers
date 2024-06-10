#!/bin/sh

# XXX: PLEASE DO NOT MODIFY

RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
BLUE="\033[1;34m"

EXECUTABLE="$PREFIX/bin/FBL"

createExecutable() {
  echo "${BLUE}[+]${YELLOW} Installing Node.js..."
  pkg install nodejs -y

  echo "${BLUE}[+]${YELLOW} Creating FBLikers executable..."
  touch "$EXECUTABLE"
  CURRENT_PATH=$(pwd)

  echo "${BLUE}[+]${YELLOW} Writing to executable file..."
  cat << EOF > "$EXECUTABLE"
#!/bin/sh
if [ -e "$CURRENT_PATH" ] && [ -e "$CURRENT_PATH/index.js" ]; then
  cd "$CURRENT_PATH"
  node index.js
else 
  echo "${GREEN}${CURRENT_PATH} or ${CURRENT_PATH}/index.js ${YELLOW}does not exist."
fi
EOF

  echo "${BLUE}[+]${YELLOW} Setting executable permissions..."
  chmod +x "$EXECUTABLE"

  echo "${BLUE}[+]${YELLOW} Installation complete. Running FBLikers..."
  if [ -e "$CURRENT_PATH/index.js" ]; then 
    FBL
  else 
    echo "${GREEN}index.js ${YELLOW}does not exist."
  fi
}

if [ -e "$EXECUTABLE" ]; then
  EXECUTABLEOUTP=$(cat "$EXECUTABLE")
  TARGETDIR=$(echo "$EXECUTABLEOUTP" | grep -oP '(?<=cd ")[^"]*')
  if [ -e "$TARGETDIR" ]; then
    echo "${BLUE}[+]${GREEN} FBL${YELLOW} is already installed and executable. There is no need to recreate it."
    echo "${BLUE}[+]${YELLOW} Simply run: ${GREEN}FBL"
  else 
    echo "${BLUE}[+]${YELLOW} The target directory does not exist. Proceeding to create the executable for FBLikers..."
    createExecutable
  fi
else
  createExecutable
fi


