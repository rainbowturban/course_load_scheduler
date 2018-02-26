package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendCreateNewRequestAction;
import org.dselent.course_load_scheduler.client.event_handler.SendCreateNewRequestEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendCreateNewRequestEvent extends GwtEvent<SendCreateNewRequestEventHandler>{
public static Type<SendCreateNewRequestEventHandler> TYPE = new Type<SendCreateNewRequestEventHandler>();
	
	private SendCreateNewRequestAction action;
	
	public SendCreateNewRequestEvent(SendCreateNewRequestAction action)
	{
		this.action = action;
	}
	
	public SendCreateNewRequestAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SendCreateNewRequestEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SendCreateNewRequestEventHandler handler)
	{
		handler.onSendCreateNewRequest(this);
	}
}
