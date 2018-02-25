package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.ReceiveGetTermsAction;
import org.dselent.course_load_scheduler.client.event_handler.ReceiveGetTermsEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class ReceiveGetTermsEvent extends GwtEvent<ReceiveGetTermsEventHandler>{
	public static Type<ReceiveGetTermsEventHandler> TYPE = new Type<ReceiveGetTermsEventHandler>();
	
	private ReceiveGetTermsAction action;
	
	public ReceiveGetTermsEvent(ReceiveGetTermsAction action)
	{
		this.action = action;
	}
	
	public ReceiveGetTermsAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<ReceiveGetTermsEventHandler> getAssociatedType()
	{
		return TYPE;
	}


	@Override
	protected void dispatch(ReceiveGetTermsEventHandler handler)
	{
		handler.onReceiveGetTerms(this);
	}

}
