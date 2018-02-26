package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveGetAllAccountAction;
import org.dselent.course_load_scheduler.client.action.SendGetAllAccountAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveGetAllAccountEventHandler;
import org.dselent.course_load_scheduler.client.event_handler.SendGetAllAccountEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class SendGetAllAccountEvent extends GwtEvent<SendGetAllAccountEventHandler>{
	public static Type<SendGetAllAccountEventHandler> TYPE = new Type<SendGetAllAccountEventHandler>();
	
	private SendGetAllAccountAction action;
	
	public SendGetAllAccountEvent(SendGetAllAccountAction action)
	{
		this.action = action;
	}
	
	public SendGetAllAccountAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SendGetAllAccountEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SendGetAllAccountEventHandler handler)
	{
		handler.onSendGetAllAccount(this);
	}

}
