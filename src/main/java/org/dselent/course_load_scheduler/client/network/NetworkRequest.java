package org.dselent.course_load_scheduler.client.network;

import java.util.ArrayList;
import java.util.List;

import org.dselent.course_load_scheduler.client.exceptions.StatusCodeException;
import org.dselent.course_load_scheduler.client.utils.JSONHelper;
import org.dselent.course_load_scheduler.client.utils.ToStringHelper;

import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.Response;
import com.google.gwt.json.client.JSONException;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * 
 * 
 * Layer for JSON communication on top of standard GWT AJAX library
 * To use, construct with an address and callback
 * and call send()
 * 
 * @author tom, Doug
 *
 */
public class NetworkRequest implements RequestCallback
{
	private static int DEFAULT_TIMEOUT_SECONDS = 20;
	
	private RequestBuilder requestBuilder;
	private AsyncCallback<JSONValue> callback;

	private List<String> failedStatusList = new ArrayList<String>();
	
	private JSONValue requestData;
	

	public NetworkRequest(String url, AsyncCallback<JSONValue> callback, JSONValue requestData)
	{
		String allUrl = NetworkRequestStrings.SERVER_LOCATION + NetworkRequestStrings.BASE_REQUEST + url;
		requestBuilder = new RequestBuilder(RequestBuilder.POST, allUrl);
		
		requestBuilder.setHeader("Content-Type","application/json");
		requestBuilder.setTimeoutMillis(DEFAULT_TIMEOUT_SECONDS * 1000);
		requestBuilder.setCallback(this);
    
		this.callback = callback;
		this.requestData = requestData;
	}

	public void send()
	{
		String json = requestData.toString();

		// Since the server expects a non-empty json payload, we'll only
		// send if that was the case.
		if (!isRequestEmpty(json))
		{
			requestBuilder.setRequestData(json);

			try
			{
				requestBuilder.send();
			}
			catch (RequestException e)
			{
				callback.onFailure(e);
			}
		}
		else
		{
			IllegalStateException ise = new IllegalStateException("In " + this.requestBuilder.getUrl() + " request: empty requestData");
			callback.onFailure(ise);
		}
	}
  
	private boolean isRequestEmpty(String payload)
	{
		boolean empty = false;

		if (payload.length() < 2)
		{
			empty = true;
		}

		return empty;
	}

	@Override
	public void onError(Request arg0, Throwable e)
	{
		callback.onFailure(e);
	}

	// From the GWT docs: 
	//   Called when a pending Request completes normally. Note this method is called 
	//   even when the status code of the HTTP response is not "OK", 200. 
	@Override
	public void onResponseReceived(Request req, Response response) 
	{
		try
		{
			int responseStatus = response.getStatusCode();
			String responseText = response.getText();
			JSONValue responseData = null;
    
			// 2xx: Success
			if((responseStatus >= 200) && (responseStatus < 300))
			{
				try
				{
					responseData = JSONParser.parseStrict(responseText);  
				}
				catch(JSONException e)
				{
					throw JSONHelper.getInvalidJSONException(responseText, e);
				}
          
				callback.onSuccess(responseData);
			} 	    
			else
			{  	    
				callback.onFailure(makeStatusCodeException(responseText));  	    
			}
		}
		catch(Throwable t)
		{      
			callback.onFailure(t);
		}
	}

  
	private StatusCodeException makeStatusCodeException(String responseText)
	{
		String message = new StringBuilder("Unexpected response from network request: ")
				.append(ToStringHelper.variableToString("responseStatus", ToStringHelper.arrayToString(failedStatusList, ", ")))
				.append(ToStringHelper.variableToString("responseText", responseText))
				.append(ToStringHelper.variableToString("url", this.requestBuilder.getUrl()))
				.append(ToStringHelper.variableToString("payload", this.requestData.toString()))
				.toString();
    
		return new StatusCodeException(message);    
	}	
}