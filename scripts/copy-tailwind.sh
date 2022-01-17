TAILWIND_CSS_FILE=../../dist/tailwind.css
PACKAGE_TAILWIND_CSS_FILE=./src/tailwind.css
PACKAGE_DIR=`pwd`

if [ ! -f "$TAILWIND_CSS_FILE" ]; then
    echo "Build tailwind.css..."
    cd ../../ && npm run build:tailwind
    cd $PACKAGE_DIR
fi

if [ ! -f "$PACKAGE_TAILWIND_CSS_FILE" ]; then
    echo "Copy dist/tailwind.css..."
    cp ../../dist/tailwind.css ./src
fi
