/*******************************************************************************
 * Copyright (c) 2010, 2011 Worcester Polytechnic Institute
 * All rights reserved. 
 *******************************************************************************/
package org.dselent.course_load_scheduler.client.utils;

import java.util.Collection;
import java.util.List;
import java.util.Map;

public class ToStringHelper
{
  public static final boolean INDENT_YES = true;
  public static final boolean INDENT_NO = false;
  public static final boolean NEWLINE_YES = true;
  public static final boolean NEWLINE_NO = false;
  public static final boolean AUTO_FORMAT_YES = true;
  public static final boolean AUTO_FORMAT_NO = false;
  
  public static String variableToString(String name, String value)
  {
    return variableToString(name, value, AUTO_FORMAT_NO);   
  }

  public static String variableToString(String name, String value, boolean autoFormat)
  {
    String result = " [" + name + ": " + value + "]";

    if(!autoFormat)
    {
      return result;
    }
    else
    {
      return formatResult(INDENT_YES, result, NEWLINE_YES).toString();
    }
  }


  public static String variableToString(String name, boolean value)
  {
    return variableToString(name, value, AUTO_FORMAT_NO);
  }

  public static String variableToString(String name, boolean value, boolean autoFormat)
  {
    return variableToString(name, Boolean.toString(value), autoFormat);
  }

  
  public static String variableToString(String name, int value)
  {    
    return variableToString(name, value, AUTO_FORMAT_NO);    
  }

  public static String variableToString(String name, int value, boolean autoFormat)
  {    
    return variableToString(name, Integer.toString(value), autoFormat);    
  }


  public static String variableToString(String name, long value)
  {
    return variableToString(name, value, AUTO_FORMAT_NO);    
  }

  public static String variableToString(String name, long value, boolean autoFormat)
  {
    return variableToString(name,  Long.toString(value), autoFormat);
  }
  
  public static Object variableToString(String name, double value, boolean autoFormat)
  {
    return variableToString(name,  Double.toString(value), autoFormat);
  }  


  public static StringBuilder variableToString(StringBuilder sb, boolean indent, String name, int value)
  {
    return variableToString(sb, indent, name, value, NEWLINE_YES);
  }

  public static StringBuilder variableToString(StringBuilder sb, boolean indent, String name, int value, boolean nl)
  {
    String result = variableToString(name, value);
    return formatResult(sb, indent, result, nl);
  }

  public static StringBuilder variableToString(StringBuilder sb, boolean indent, String name, long value)
  {
    return variableToString(sb, indent, name, value, NEWLINE_YES);
  }

  public static StringBuilder variableToString(StringBuilder sb, boolean indent, String name, long value, boolean nl)
  {
    String result = variableToString(name, value);
    return formatResult(sb, indent, result, nl);
  }

  public static StringBuilder variableToString(StringBuilder sb, boolean indent, String name, String value)
  {
    return variableToString(sb, indent, name, value, NEWLINE_YES);
  }
  
  /**
   * Returns a formatted string representation of a given String.  
   * @param sb If non-null, appends the result to this <tt>StringBuilder</tt> 
   * @param indent Specifies whether to indent the returned string representation 
   * @param name The name of the variable being processed 
   * @param value The value of that variable
   * @param nl Specifies to append a new line to the returned string representation
   * @return The string representation of <tt>value</tt>
   */
  public static StringBuilder variableToString(StringBuilder sb, boolean indent, String name, String value, boolean nl)
  {
    String result = variableToString(name, value);
    return formatResult(sb, indent, result, nl);
  }


  public static StringBuilder variableToString(StringBuilder sb, boolean indent, String name, boolean value)
  {
    return variableToString(sb, indent, name, value, NEWLINE_YES);
  }

  public static StringBuilder variableToString(StringBuilder sb, boolean indent, String name, boolean value, boolean nl)
  {
    String result = variableToString(name, value);
    return formatResult(sb, indent, result, nl);
  }


  private static StringBuilder formatResult(boolean indent, String result, boolean nl)
  {
    StringBuilder sb = new StringBuilder();

    if(indent)
    {
      sb.append(Util.INDENT);
    }

    sb.append(result);

    if(nl)
    {
      sb.append(Util.NL);
    }

    return sb;
  }

  private static StringBuilder formatResult(StringBuilder sb,  boolean indent, String result, boolean nl)
  {
    if (sb == null)
    {
      sb = new StringBuilder();
    }

    if(indent)
    {
      sb.append(Util.INDENT);
    }

    sb.append(result);

    if(nl)
    {
      sb.append(Util.NL);
    }

    return sb;
  }
  
 /* TODO: Consider a generic version of mapToString:  
    Will probably need to make variableToString() and others generic as well.
    
    For ex: 
    
  public static <K extends Object, V extends Object> StringBuilder mapToString(StringBuilder sb, 
      boolean indent, Map<K,V> map, boolean nl)  
  {
    for (K key : map.keySet())
    {
      variableToString(sb, indent, key.toString(), map.get(key).toString()...
    }
    
    return sb;
  }
*/
  public static StringBuilder mapToString(Map<String,String> map)
  {
    return mapToString(new StringBuilder(), true, "  ", map, null, true);
  }
  
  public static StringBuilder mapToString(StringBuilder sb, boolean indent, String indentHack,
      Map<String,String> map, boolean nl)
  {
    return mapToString(sb, indent, indentHack, map, null, nl);
  }
  
  public static StringBuilder mapToString(StringBuilder sb, boolean indent, String indentHack,
      Map<String,String> map, List<String> simpleClassNameList, boolean nl)
  {
    for (String key : map.keySet())
    {
      if(indent)
      {
        sb.append(indentHack);
      }
      
      if((simpleClassNameList != null) && (simpleClassNameList.contains(key)))
      {
        sb = variableToString(sb, indent, key, Util.getSimpleClassType(map.get(key)), nl);
      }
      else
      {
        sb = variableToString(sb, indent, key, map.get(key), nl);
      }
    }
    
    return sb;    
  }
  
  public static String arrayToString(String[] array, String delimiter)
  {
    StringBuffer sb = new StringBuffer();

    if(array.length > 0)
    {
      sb.append(array[0]);
    }
    
    for(int i = 1; i < array.length; i++)
    {
      sb.append(delimiter + array[i]);
    }
    
    return sb.toString();
  }

  public static String arrayToString(Collection<String> array, String delimiter)
  {
    StringBuffer sb = new StringBuffer();

    int count = 0;
    int size = array.size();
    
    for(String item : array)
    {
      sb.append(item);
      ++count;
      
      if(count != size)
      {
        sb.append(delimiter);
      }
    }
    
    return sb.toString();
  }

  public static String stringToUTF8Values(String str)
  {
    try
    {
      byte[] b = str.getBytes("UTF-8");

      StringBuilder sb = new StringBuilder();

      for (int i = 0; i < b.length; ++i)
      {
        sb.append('[').append(b[i]).append("] ");
      }

      return sb.toString();
    }
    catch (Throwable t)
    {
      return "Failed to stringToUTF8Values(): " + t.toString();
    }
  }

}