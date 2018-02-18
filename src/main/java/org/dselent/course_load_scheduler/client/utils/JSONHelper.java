/**
 * From assistments code
 * Modified by Doug
 */
package org.dselent.course_load_scheduler.client.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.dselent.course_load_scheduler.client.exceptions.InvalidJsonException;

import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONBoolean;
import com.google.gwt.json.client.JSONException;
import com.google.gwt.json.client.JSONNull;
import com.google.gwt.json.client.JSONNumber;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONString;
import com.google.gwt.json.client.JSONValue;

public class JSONHelper
{
	/**
	 * Constant signaling that a value is required.
	 */
	public static final boolean REQUIRED = true;

	/**
	 * Constant signaling that a value is optional.
	 */
	public static final boolean OPTIONAL = false;

	/**
	 * Constant representing a null <tt>String</tt>.
	 * <p>
	 * When objects have an unused field, they are often (but probably not
	 * consistently) null. For example, a Manifest without tutoring has a
	 * tutoringKey = null.
	 * <p>
	 * JSON objects (or at least JSONString) don't permit null values. When
	 * presented with a null value here we could choose to either:
	 * <ol>
	 * <li>not add the key to the JSON, or
	 * <li>add the key with an empty value </ul> On the assumption that less
	 * JSON is better than more JSON, this class goes with option (1).
	 * <p>
	 * To be consistent: when looking for a value in the JSON, if the key is not
	 * found, we return a null.
	 */
	public static final String NULL_STR = null;

	/**
	 * Creates and returns a <tt>JSONObject</tt> from a JSON string.
	 * 
	 * @param jsonString
	 *            String representation of a JSON object.
	 * @throws InvalidJsonException 
	 */
	public static JSONObject getJSONObjectFromString(String jsonString) throws InvalidJsonException
	{
		JSONValue val = null;
		
		try
		{
			val = JSONParser.parseStrict(jsonString);
		}
		catch (JSONException jsonExt)
		{
			throw getInvalidJSONException(jsonString, jsonExt);
		}
		
		if (val == null)
		{
			throw new JSONException("Invalid JSON.");
		}

		JSONObject obj = val.isObject();
		
		if (obj == null)
		{
			throw getJsonException(val, "Provided json was not an object, when we expected one.");
		}
		
		return obj;
	}

	/**
	 * Returns the Content Key from a JSON object.
	 * <p>
	 * 
	 * @param jsonObject
	 *            JSON Object
	 * @throws JSONException
	 *             If <tt>jsonObject</tt> does not contain a meaningful Content Key
	 *             value.
	 * @throws IllegalArgumentException
	 *             If the Content Key found is not in a valid format.
	 */
	public static void putArrayValue(JSONObject jsonObject, String key, JSONArray jsonArray)
	{
		if (jsonArray != null && jsonArray.size() == 0)
		{
			jsonObject.put(key, jsonArray);
		}
	}


	/**
	 * Returns the JSON value for the specified key.
	 * 
	 * @param jsonObject
	 *            JSON object holding the specified key, value pair
	 *
	 * @param key
	 *            Key Property name
	 * 
	 * @throws JSONException
	 *             When <tt>isRequired</tt> is set to <tt>true</tt> and
	 *             <tt>jsonObject</tt> does not contain <tt>key</tt>.
	 */
	private static JSONValue getValue(JSONObject jsonObject, String key) throws JSONException
	{
		JSONValue jsonValue = jsonObject.get(key);

		if (jsonValue == null) 
		{
			throw getMissingKeyException(jsonObject, key);
		}

		return jsonValue;
	}


	public static boolean getBooleanValue(JSONObject jsonValue, String key) throws JSONException
	{
		JSONValue jValue = getValue(jsonValue, key);

		if (jValue == null)
		{
			throw getJsonException(jsonValue, "Missing key: " + key);
		}

		JSONBoolean jsonBoolean = jsonValue.isBoolean();
		
		if (jsonBoolean == null)
		{
			throw getJsonException(jsonValue, "Expected boolean value.");
		}
		
		return jsonBoolean.booleanValue();
	}

	public static String getStringValue(JSONValue jsonValue) throws JSONException
	{
		if (jsonValue.isNull() != null)
		{
			getJsonException(jsonValue, "Expected String Value.");
		}

		JSONString jString = jsonValue.isString();
		
		if (jString == null)
		{
			getJsonException(jsonValue, "Expected String Value.");
		}
		
		return jString.stringValue();
	}

	// For use when you're going through a JSONArray and each get() returns a
	// JSONValue which really
	// is a JSONObject
	public static String getStringValue(JSONValue jsonValue, String key) throws JSONException
	{
		JSONObject jsonObject = jsonValue.isObject();
		
		JSONValue jValue = getValue(jsonObject, key);

		if (jValue == null)
		{
			return NULL_STR;
		}

		return getStringValue(jValue);

	}

	/**
	 * Returns a specified value as an integer value.
	 */
	public static long getLongValue(JSONObject jsonObject, String key) throws JSONException
	{
		long longValue = 0;
		JSONValue jsonValue = getValue(jsonObject, key);
		
		if(jsonValue == null)
		{
			throw getJsonException(jsonValue, "Value cannot be null");
		}
		else
		{
			JSONNumber jsonNumber = jsonValue.isNumber();
			
			if(jsonNumber == null)
			{
				throw new JSONException("Not a Number.");
			}
			else
			{
				longValue = (long) jsonNumber.doubleValue();
			}
		}
		
		return longValue;
	}
	
	public static int getIntValue(JSONObject jsonObject, String key) throws JSONException
	{
		int intValue = 0;
		JSONValue jsonValue = getValue(jsonObject, key);
		
		if(jsonValue == null)
		{
			throw getJsonException(jsonValue, "Value cannot be null");
		}
		else
		{
			JSONNumber jsonNumber = jsonValue.isNumber();
			
			if(jsonNumber == null)
			{
				throw new JSONException("Not a Number.");
			}
			else
			{
				intValue = (int) jsonNumber.doubleValue();
			}
		}
		
		return intValue;
	}
	
	public static double getDoubleValue(JSONObject jo, String key) throws JSONException
	{
		double doubleValue = 0.0;
		
		JSONValue jsonValue = getValue(jo, key);
		
		if(jsonValue == null)
		{
			throw getJsonException(jsonValue, "Value cannot be null");
		}
		else
		{
			JSONNumber jsonNumber = jsonValue.isNumber();
			
			if(jsonNumber == null)
			{
				throw new JSONException("Not a Number.");
			}
			else
			{
				doubleValue = jsonNumber.doubleValue();
			}
		}
		
		return doubleValue;
	}
	
	public static JSONObject getObjectValue(JSONValue jsonValue)
	{
		JSONObject jsonObject = jsonValue.isObject();
		
		if(jsonObject == null)
		{
			throw getJsonException(jsonValue, "Expected Object value.");
		}
		
		return jsonObject;
	}

	public static JSONObject getObjectValue(JSONObject jsonObject, String key)
	{
		JSONValue jsonValue = getValue(jsonObject, key);
		
		if (jsonValue == null)
		{
			throw getJsonException(jsonValue, "jsonValue is null");
		}
		
		return getObjectValue(jsonValue);
	}

	public static JSONArray getArrayValue(JSONValue jsonValue)
	{
		JSONArray jsonArray = jsonValue.isArray();
		
		if (jsonArray == null)
		{
			throw getJsonException(jsonValue, "jsonArray is null");
		}
		
		return jsonArray;
	}

	public static JSONArray getArrayValue(JSONObject jsonObject, String key)
	{
		JSONValue jsonValue = getValue(jsonObject, key);
	
		if (jsonValue == null)
		{
			throw getJsonException(jsonValue, "jsonArray is null");
		}

		return getArrayValue(jsonValue);
	}


	/**
	 * Inserts a String value into a JSON Object
	 * 
	 * @param json
	 *            JSON Object
	 * @param key
	 *            Key name
	 * @param value
	 *            Data value. If <tt>null</tt> stores nothing.
	 */
	public static void putStringValue(JSONObject json, String key, String value)
	{

		if (value == null)
		{
			throw new JSONException("String cannot be null");
		}

		json.put(key, new JSONString(value));
	}

	public static void putLongValue(JSONObject json, String key, Long value)
	{
		if (value == null)
		{
			throw new JSONException("Long cannot be null");
		}

		// Convert to a double before passing
		json.put(key, new JSONNumber(value.doubleValue()));
	}
	
	public static void putIntValue(JSONObject json, String key, Integer value)
	{
		if (value == null)
		{
			throw new JSONException("Integer cannot be null");
		}

		// Convert to a double before passing
		json.put(key, new JSONNumber(value.doubleValue()));
	}
	
	public static void putDoubleValue(JSONObject json, String key, Double value)
	{
		if (value == null)
		{
			return;
		}

		json.put(key, new JSONNumber(value));
	}

	public static void putBooleanValue(JSONObject json, String key, boolean value)
	{
		json.put(key, JSONBoolean.getInstance(value));
	}

	public static void putStringValue(JSONObject json, String key, boolean value) throws IllegalArgumentException
	{
		String boolStr = Boolean.toString(value);
		putStringValue(json, key, boolStr);
	}

	public static void putKeyValueList(JSONObject json, String key, List<Pair<String,String>> keyValues)
	{
		JSONObject listJSON = new JSONObject();
		json.put(key, listJSON);
	  
		for (Pair<String, String> keyValue : keyValues)
		{
			JSONHelper.putStringValue(listJSON, keyValue.getValue1(), keyValue.getValue2());
		}	 
	}
	
	/**
	 * Inserts a Map into a JSON Object
	 * 
	 * @param json
	 *            JSON object
	 * @param key
	 *            Key name
	 * @param map
	 *            Map to convert to JSON and insert into <tt>jo</tt>
	 */
	public static void putMap(JSONObject json, String key, Map<String, String> map)
	{
		JSONObject destination = new JSONObject();

		if (map != null)
		{
			for (String k : map.keySet())
			{
				destination.put(k, new JSONString(map.get(k)));
			}
		}

		json.put(key, destination);
	}

	public static void putMapOfMaps(JSONObject json, String key,  Map<String, Map<String, String>> map)
	{
		JSONObject destination = new JSONObject();

		if (map != null)
		{
			for (String k : map.keySet())
			{
				Map<String, String> innerMap = map.get(k);
				
				if (innerMap != null)
				{
					JSONObject interrim = new JSONObject();
					
					for (String l: innerMap.keySet())
					{
						interrim.put(l, new JSONString(innerMap.get(l)));
					}
					
					destination.put(k, interrim);					
				}
			}
		}

		json.put(key, destination);
	}
	
	public static Map<String, String> getMap(JSONObject json)
	{
		Map<String, String> map = new HashMap<String, String>();

		for (String key : json.keySet())
		{
			map.put(key, json.get(key).isString().stringValue());
		}

		return map;
	}

	public static String convertKeyName(Enum<?> request_enum)
	{
		String enumString = request_enum.toString().toLowerCase();
		String[] variableNameParts = enumString.split("_");
		String variableName = variableNameParts[0];
		
		for(int i=1; i<variableNameParts.length; i++)
		{
			variableName = variableName.concat(capitalizeFirstLetter(variableNameParts[i]));
		}
		
		return variableName;
	}
	
	// TODO implement null check
	private static String capitalizeFirstLetter(String string)
	{
		String firstLetter = string.substring(0, 1);
		String capitalizedFirstLetter = firstLetter.toUpperCase();
		return capitalizedFirstLetter.concat(string.substring(1));
	}
	
	/**
	 * Converts a Map to a JSON Object
	 * 
	 * @param map
	 *            Map to convert
	 */
	public static JSONObject translateMapToJSONObject(Map<String, String> map)
	{
		JSONObject json = new JSONObject();
		
		for (String key : map.keySet())
		{
			json.put(key, new JSONString(map.get(key)));
		}
		
		return json;
	}

	public static boolean isNull(JSONValue jsonValue)
	{
		return ((jsonValue == null) || (jsonValue instanceof JSONNull)) ? true : false;
	}

	public static JSONArray getJSONArray(JSONObject jsonObject, String key, boolean isRequired) throws JSONException
	{
		JSONArray jsonArray = null;
		JSONValue jsonValue = jsonObject.get(key);

		// If the key doesn't exist...
		if (isNull(jsonValue))
		{
			if (isRequired)
			{
				throw getMissingKeyException(jsonObject, key);
			}
			else
			{
				// If optional, return null
				return jsonArray;
			}
		}
		else
		{
			// See if we've really got an array
			jsonArray = jsonValue.isArray();

			// If it wan't an array...
			if (jsonArray == null)
			{
				// Regardless of isRequired, we'll throw an exception since the
				// caller
				// must have been expected an array at that key
				throw getJsonException(jsonObject, key, "Not an array");
			}
		}

		return jsonArray;
	}

	/**
	 * Converts a JSONArray of strings to a List
	 * 
	 * @param array
	 *            JSON array where each element is a JSONString value
	 */
	public static List<String> JSONArrayToStringList(JSONArray array)
	{
		List<String> list = new ArrayList<String>(array.size());

		// For each element in the array
		for (int i = 0; i < array.size(); i++)
		{
			// Get the JSON element
			JSONValue jsonValue = array.get(i);

			String value = JSONHelper.getStringValue(jsonValue);

			list.add(value);
		}

		return list;
	}

	/**
	 * Converts a JSONArray of strings to a String array.
	 * 
	 * @param array
	 *            JSON array where each element is a JSONString value
	 */
	public static String[] JSONArrayToStringArray(JSONArray array)
	{
		List<String> pKeys = JSONArrayToStringList(array);

		String[] keys = Util.makeStringArray(pKeys);

		return keys;
	}

	/*
	public static JSONObject setResponse(JSONObject json, String type, String value)
	{
		JSONObject valuePart = new JSONObject();
		valuePart.put(TranslationKeys.TYPE, new JSONString(type));
		valuePart.put(TranslationKeys.VALUE, new JSONString(value));
		JSONArray valueParts = new JSONArray();
		valueParts.set(0, valuePart);
		JSONObject response = new JSONObject();
		response.put(TranslationKeys.VALUE_PARTS, valueParts);
		json.put(TranslationKeys.RESPONSE, response);
		return json;
	}
	*/


	/**
	 * <tt>getInvalidJSONException</tt> returns an <tt>InvalidJSONException</tt>
	 * combining the root <tt>JavaScriptExcetpion</tt> message with the JSON
	 * encoded text string that triggered the exception.
	 * <p>
	 * The <tt>ErrorDialog</tt> displays the root exception info. If we threw a
	 * new exception with "t" as the cause and the JSON text as the new
	 * exception's message, we own't see the JSON text in the
	 * <tt>ErrorDialog</tt>. To avoid that, we create a new exception here
	 * combining the initial message with the JSON text in error.
	 * 
	 * @param json
	 *            JSON encoded string
	 * @param t
	 *            Throwable
	 */
	public static InvalidJsonException getInvalidJSONException(String json, Throwable t)
	{
		StringBuilder sb = new StringBuilder();

		// If this was a JSONException (all we really expect), get
		// the message provided by the JSONParser.
		if (t instanceof JSONException)
		{
			// Get the JSONParser's msg
			String jpMsg = t.getMessage();

			if (jpMsg != null)
			{
				sb.append(jpMsg);
			}
		}
		else
		{
			// Otherwise, get the class name and message.
			sb.append(t.toString());
		}

		// HTML-escape the "json" data. This protects us from when we receive a response from
		// a proxy server that returns an html page.
		sb.append(Util.NL)
			.append(ToStringHelper.variableToString("JSON", HTMLCleanser.escapeHtml(json)))
			.append(Util.NL)
			.append(ToStringHelper.stringToUTF8Values(json));

		// If the parse failed, we want to see exactly what came over.
		return new InvalidJsonException(sb.toString());
	}
	
	public static JSONException getMissingKeyException(JSONValue json, String key) throws JSONException
	{
		return getJsonException(json, key, "Missing key");
	}


	public static JSONException getJsonException(JSONValue json, String message)
	{
		StringBuilder sb = new StringBuilder("Invalid JSON content:");
		sb.append(Util.NL);
		sb.append(message);
		sb.append(Util.NL);
		sb.append(ToStringHelper.variableToString("JSON", json.toString()));

		return new JSONException(sb.toString());
	}
	
	public static JSONException getJsonException(JSONValue jo, String key, String msg)
	{
		StringBuilder sb = new StringBuilder("Invalid JSON content:");
		sb.append(Util.NL);
		sb.append(ToStringHelper.variableToString(msg, key));
		sb.append(Util.NL);
		sb.append(ToStringHelper.variableToString("JSON", jo.toString()));

		throw new JSONException(sb.toString());
	}
}