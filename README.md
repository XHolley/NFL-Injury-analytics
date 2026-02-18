# NFL Injury Analytics

A Python-based project for analyzing NFL injury data and trends.

## Prerequisites

- Python 3.13 or higher
- Git

## Installation and Setup for Contributors

1. **Fork and Clone the Repository**
   - Fork `https://github.com/daniiprietoo/nfl-injury-analytics` to your own GitHub account.
   - Clone your fork:
   ```bash
   git clone https://github.com/yourusername/nfl-injury-analytics.git
   cd nfl-injury-analytics
   ```
   - Add the original project as `upstream`:
   ```bash
   git remote add upstream https://github.com/daniiprietoo/nfl-injury-analytics.git
   ```

2. **Set Up Development Environment**
   ```bash
   # Create and activate virtual environment
   python -m venv .venv
   source .venv/bin/activate  # On macOS
    .venv\Scripts\activate  # On Windows
   
   # Install dependencies (choose one method)
   pip install -r requirements.txt  # Using requirements.txt
   ```

## Development Workflow

1. **Before Starting New Work**
   ```bash
   git checkout main
   git fetch upstream
   git merge upstream/main
   ```

2. **Create a New Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Making Changes**
   - Write your code
   - Commit frequently with clear messages:
   ```bash
   git add .
   git commit -m "Clear description of your changes"
   ```

4. **Push Your Changes**
   ```bash
   git push -u origin feature/your-feature-name
   ```

5. **Create Pull Request**
   - Go to the repository on GitHub
   - Create a new Pull Request from your branch in your fork to `daniiprietoo/nfl-injury-analytics:main`
   - Request review from team members
   - Merge after approval


## Branch Naming Convention

- Features: `feature/description`



