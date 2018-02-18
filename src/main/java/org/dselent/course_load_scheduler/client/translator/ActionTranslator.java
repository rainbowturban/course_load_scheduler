package org.dselent.course_load_scheduler.client.translator;

import org.dselent.course_load_scheduler.client.action.Action;

import com.google.gwt.json.client.JSONObject;

public interface ActionTranslator<A extends Action, B extends Action>
{
	public JSONObject translateToJson(A object);
	public B translateToAction(JSONObject json);
}