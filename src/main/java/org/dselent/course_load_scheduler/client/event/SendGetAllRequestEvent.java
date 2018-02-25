package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendGetAllRequestAction;
import org.dselent.course_load_scheduler.client.event_handler.SendGetAllRequestEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class SendGetAllRequestEvent extends GwtEvent<SendGetAllRequestEventHandler>{
	public static Type<SendGetAllRequestEventHandler> TYPE = new Type<SendGetAllRequestEventHandler>();
	
	private SendGetAllRequestAction action;
	
	public SendGetAllRequestEvent(SendGetAllRequestAction action)
	{
		this.action = action;
	}
	
	public SendGetAllRequestAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SendGetAllRequestEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SendGetAllRequestEventHandler handler)
	{
		handler.onSendGetAllRequest(this);
	}
}
