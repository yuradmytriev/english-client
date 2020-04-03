module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/recommended',
    'plugin:promise/recommended',
  ],
  plugins: [
    'prettier',
    'react',
    'eslint-plugin-fp',
    'promise',
    'sonarjs',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-import',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    // for unresolved-path
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-shadow': 0,
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'for-direction': 'error', // prevent infinite for loops
    'getter-return': 'error', // getter should always return value
    'no-compare-neg-zero': 'error', // prevent direct comparison with -0
    'no-cond-assign': 'error', // prevent variable assignment in conditional
    'no-console': 'error',
    'no-constant-condition': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error', // disallows duplicated parameters
    'no-empty': 'error', // disallows empty block statements
    'no-ex-assign': 'error', // disallows reassigning exceptions in catch clauses
    'no-extra-boolean-cast': 'error', // disallows boolean cast in conditionals
    'no-func-assign': 'error', // disable function assign
    'no-import-assign': 'error', // disable assign to import module new value
    'no-inner-declarations': 'error', // don't declare anything in conditionals,
    'no-obj-calls': 'error', // disallows calling objects as functions
    'no-prototype-builtins': 'error', // disallows calling methods directly on object instances
    'no-setter-return': 'error', // disallows returning values from setters
    'no-sparse-arrays': 'error', // disable arrays empty slots
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error', // disallows confusing multiline expressions where a newline looks like it is ending a statement, but is not
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error', // disallows return, throw, break, and continue statements inside finally blocks
    'no-unsafe-negation': 'error', // safe correctness of conditional
    'use-isnan': 'error',

    // best practice
    'array-callback-return': 'error', // fix error when don't return value from map or another function
    'block-scoped-var': 'error',
    'class-methods-use-this': 0, // if function don't use this so this method can be static
    complexity: ['error', 10],
    'consistent-return': 'error',
    curly: 'error',
    'default-case': 'error',
    'default-param-last': 0, // optional params should be last
    'dot-location': 'error', // dot on the same line
    eqeqeq: 'error', // disable ==
    'guard-for-in': 'error', // check in for in loop that key is property of the object nd not proto
    'max-classes-per-file': ['error', 2],
    'no-alert': 'error',
    'no-caller': 'error', // disable arguments.callee
    'no-case-declarations': 'error', // disable function f() {} in cases
    'no-constructor-return': 'error', // remove return on constructor
    'no-else-return': 'error',
    'no-empty-function': 0,
    'no-eq-null': 'error', // disable == null
    'no-eval': 'error',
    'no-extend-native': 'error', // disable extend builtin object
    'no-extra-bind': 'error',
    'no-extra-label': 'error', // disable extra loop label
    'no-floating-decimal': 'error', // disable .5 shorthand
    'no-global-assign': 'error', // disable window = {}
    'no-implicit-coercion': 'error', // disable !! and prefer Boolean()
    'no-implied-eval': 'error', // disable setTimeout("alert('Hi!');", 100);
    'no-invalid-this': 'error',
    'no-lone-blocks': 'error', // no empty blocks
    'no-loop-func': 'error', // don't declare functions in loop
    'no-magic-numbers': 'error',
    'no-multi-spaces': 'error', // prevent this case (foo   === "bar")
    'no-multi-str': 'error',
    'no-new': 'error', // disallowing constructor calls using the new keyword that do not assign the resulting object
    'no-new-func': 'error',
    'no-new-wrappers': 'error', // prevent new String()
    'no-octal': 'error', // 071 -> 57 prevent this transform
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error', // prefer getPrototypeOf to __proto__
    'no-redeclare': 'error', // prevent this one: var a = 3; a = 10;
    'no-return-assign': 'error',
    'no-script-url': 'error', // prevent location.href = "javascript:void(0)";
    'no-self-assign': 'error', // self assignments have no effect
    'no-self-compare': 'error', // prevent x === x
    'no-sequences': 'error', // The comma operator includes multiple expressions where only one is expected
    'no-throw-literal': 'error', // good practice to only throw the Error object
    'no-unused-expressions': 'error',
    'no-useless-call': 'error', // prevent call(undefined)
    'no-useless-catch': 'error',
    'no-useless-concat': 'error', // prevent this '1' + '0'
    'no-useless-return': 'error', // prevent empty return
    'no-warning-comments': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error', // promise should be rejected with new Error
    radix: 'error', // always use parseInt("071", 10)
    'require-await': 'error',
    yoda: 'error', // disable yoda conditionals like this "red" === color
    'no-delete-var': 'error',
    'array-bracket-spacing': 'error',
    'brace-style': 'error',
    camelcase: 'error',
    'comma-dangle': 'error', // comma in the object end
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error', // prevent this obj[ 'foo']
    'func-call-spacing': 'error', // prevent f ()
    'func-name-matching': 'error', // should be var foo = function foo() {};
    'max-depth': ['error', 4],
    'max-params': ['error', 3],
    'new-cap': 'error', // prevent new person()
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error', // prevent this var a = b = c = 5;
    'no-nested-ternary': 'error',
    'no-new-object': 'error', // prevent new Object()
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error', // prevent this var a = x === 2 ? true : false;
    'no-whitespace-before-property': 'error', // prevent this foo [bar]

    // disable
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'no-useless-constructor': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-return-await': 0,

    // eslint-plugin-fp (done)
    'fp/no-mutation': [
      'error',
      {
        commonjs: true,
        allowThis: true,
        exceptions: [{ property: 'propTypes' }],
      },
    ],
    'fp/no-delete': 'error',
    'fp/no-mutating-assign': 'error', // Forbid the use of Object.assign() with a variable as first argument
    'fp/no-mutating-methods': 'error', // Forbid pop, push

    // eslint-plugin-sonarjs (done)
    'sonarjs/no-all-duplicated-branches': 'error',
    'sonarjs/no-element-overwrite': 'error',
    'sonarjs/no-extra-arguments': 'error',
    'sonarjs/no-identical-conditions': 'error',
    'sonarjs/no-identical-expressions': 'error',
    'sonarjs/no-one-iteration-loop': 'error',
    'sonarjs/no-collapsible-if': 'error',
    'sonarjs/no-collection-size-mischeck': 'error',
    'sonarjs/no-duplicate-string': ['error', 3],
    'sonarjs/no-duplicated-branches': 'error',
    'sonarjs/no-identical-functions': 'error',
    'sonarjs/no-inverted-boolean-check': 'error',
    'sonarjs/no-redundant-boolean': 'error',
    'sonarjs/no-redundant-jump': 'error',
    'sonarjs/no-same-line-conditional': 'error',
    'sonarjs/no-small-switch': 'error',
    'sonarjs/no-unused-collection': 'error',
    'sonarjs/no-useless-catch': 'error',
    'sonarjs/prefer-immediate-return': 'error',
    'sonarjs/prefer-object-literal': 'error',
    'sonarjs/prefer-single-boolean-return': 'error',

    // eslint-plugin-jsx-a11y
    'jsx-a11y/accessible-emoji': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/media-has-caption': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-distracting-elements': 'error',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/anchor-has-content': [
      2,
      {
        components: ['Anchor'],
      },
    ],
    'jsx-a11y/aria-role': [
      2,
      {
        ignoreNonDOM: true,
      },
    ],
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-key': 0,

    // eslint-plugin-import
    'import/no-unresolved': 0,
    'import/named': 'error',
    'import/default': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-mutable-exports': 'error',
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        groups: [],
        'newlines-between': 'always',
      },
    ],
  },
};
