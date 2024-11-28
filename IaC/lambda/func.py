import json
import boto3
from decimal import Decimal

# Initialize DynamoDB resource
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloudresume')

# Helper function to convert Decimal to float
def decimal_default(obj):
    if isinstance(obj, Decimal):
        return float(obj)
    raise TypeError("Type not serializable")

# Define the Lambda handler function
def handler(event, context):
    try:
        # Retrieve the item from DynamoDB
        response = table.get_item(Key={'id': '1'})
        
        # Check if the item exists
        if 'Item' in response:
            views = response['Item']['views']
        else:
            # Initialize views if the item doesn't exist
            views = 0
        
        # Increment views
        views += 1
        
        # Update the item in DynamoDB
        table.put_item(Item={'id': '1', 'views': views})
        
        # Return the updated views count with proper Decimal handling
        return {
            'statusCode': 200,
            'body': json.dumps({'views': views}, default=decimal_default)  # Use the decimal_default function
        }
    
    except Exception as e:
        # Log and return the error
        print(f"Error: {e}")
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }